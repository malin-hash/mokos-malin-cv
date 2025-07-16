import React, {useEffect, useRef} from 'react'

export default function BinaryRain() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const binaryChars = '01'
        const fontSize = 10;
        const columns = canvas.width / fontSize;
        const drops = Array.from({length: columns}).map(() => Math.random() * canvas.height);

        function draw() {
            // légère opacité pour les effets trainés
            ctx.fillStyle = 'rgba(26, 32, 44, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff00' // couleur verte matrix
            ctx.font = '${fontSize}px monospace';
            const colors = ['#00ff00', '#00ffff', '#ffef00', '#aef00f', '#fff1e0', 'red', 'orange', 'blue', 'purple', 'yellow', 'pink', 'gray']
            for (let i = 0; i < drops.length; i++) {
                const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
                ctx.fillText(text, x, y);
                // effet remonté ou casure
                if(y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0; 
                }else{
                    drops[i] += 1;
                }
            }
            requestAnimationFrame(draw);
        }
        draw();
        // resize responsive
        const handelResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handelResize);
        return () => window.removeEventListener('resize', handelResize);
    }, []);
  return (
    <canvas
    ref={canvasRef}
    className='fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-45'>

    </canvas>
  )
}
