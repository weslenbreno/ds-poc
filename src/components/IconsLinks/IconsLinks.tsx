import stitchesLogo from '/stitches.svg'
import radixLogo from '/radix.svg'
import portoLogo from '/logo.png'

export function IconsLinks() {
    return (
        <div>
            <a href="https://loja.portoseguro.com.br/" target="_blank">
                <img src={portoLogo} className="logo" alt="Vite logo" />
            </a>

            <a href="https://loja.portoseguro.com.br/" target="_blank">
                <img src={stitchesLogo} className="logo" alt="Vite logo" />
            </a>

            <a href="https://loja.portoseguro.com.br/" target="_blank">
                <img src={radixLogo} className="logo" alt="Vite logo" />
            </a>
        </div>
    )
}
