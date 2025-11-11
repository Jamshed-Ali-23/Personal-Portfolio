import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

// Helper function to get the correct asset path for production
const getAssetPath = (src: string) => {
  // If it's already a full URL or starts with /, return as is
  if (src.startsWith('http') || src.startsWith('/')) {
    return src;
  }
  
  // For production builds, ensure the path starts with /
  if (import.meta.env.PROD) {
    return src.startsWith('/') ? src : `/${src}`;
  }
  
  // For development, use the src as is
  return src;
};

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback,
  priority = false,
  sizes = '100vw',
  quality = 80
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {!isInView && !priority && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {isInView && (
        <motion.img
          src={hasError ? (fallback ? getAssetPath(fallback) : undefined) : getAssetPath(src)}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};
