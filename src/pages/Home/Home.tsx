import { useState } from "react"
import { IconsLinks } from "../../components"
import { Button, Dialog, Toast } from "../../ui"
import { Fieldset, Flex, Input, Label } from "./Home.styles"

export function Home() {
    const [openToast, setOpenToast] = useState(false)

    function handleOpenToast() {
        setOpenToast(true)
        setTimeout(() => {
            setOpenToast(false)
        }, 3000)
    }

    return (
        <>
            <IconsLinks />
            <h1>Stitches + Radix</h1>
            <p>Clique no botão abaixo para acopmanhar as novidades da Porto Seguros</p>
            <Dialog>
                <Dialog.Trigger>Inscrever-se</Dialog.Trigger>
                <Dialog.Content title="Novidades da Porto" description="Fique por dentro de tudo que acontece na Porto Seguros">
                    <Fieldset>
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" placeholder='Digite seu email...' />
                    </Fieldset>
                    <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
                        <Dialog.Close>
                            <Button variant="blue" onClick={handleOpenToast}>Salvar</Button>
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog>
            <Toast open={openToast} onOpenChange={setOpenToast}>
                <Toast.Title>Inscrição concluída</Toast.Title>
                <Toast.Description>Obrigado por se inscrever no nosso canal de notícias</Toast.Description>
            </Toast>
            <p className="read-the-docs">
                Esta página é apenas uma prova de conceito para mostrar como você pode usar Stitches e Radix juntos.
            </p>
        </>
    )
}


