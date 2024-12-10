/* eslint-disable react/prop-types */

export default function CTAButton({ 
  children,
  variant = 'primary',
  className = '',
  ...props 
}) {
  const baseStyle = 'px-4 py-2 rounded-lg shadow-lg shadow-marianBlue font-medium transition-all duration-200 ';
  const styles = {
    primary: baseStyle + 'bg-marianBlue border-2 border-marianBlue w-[200px] text-white hover:bg-blueGreen hover:border-blueGreen',
    secondary: baseStyle + 'bg-gray-200 border-2 border-marianBlue text-marianBlue hover:bg-blueGreen hover:border-blueGreen hover:text-white'
  };

  return (
    <button 
      className={`${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}