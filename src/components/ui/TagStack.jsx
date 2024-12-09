
export default function TagStack() {
  const logosStack = [
    { src: '/logos_stack/HTML5_resize.png', name: 'HTML' },
    { src: '/logos_stack/CSS3_resize.png', name: 'CSS' },
    { src: '/logos_stack/React_resize.png', name: 'React' },
    { src: '/logos_stack/next-js.svg', name: 'Next.js' },
    { src: '/logos_stack/TailwindCSS_resize.png', name: 'Tailwind CSS' },
  ];

  return (
    <div className="flex flex-wrap gap-8 font-roboto">
      {logosStack.map((item) => (
        <article 
          key={item.name} 
          className={`flex flex-col items-center p-2 rounded-lg`}
        >
          <div className="w-h-20 h-20 relative">
            <img 
              src={item.src} 
              alt={item.name}
              className="w-full h-full object-contain" 
            />
          </div>
          <h3 className="mt-2 text-2xl font-medium text-black">{item.name}</h3>
        </article>
      ))}
    </div>
  );
}
