import { Dialog, Button, Toast } from './ui'
import { Fieldset, Flex, Input, Label } from './App.styles'
import { useState } from 'react'
import './App.css'
import { IconsLinks } from './components'

function App() {
  const [openToast, setOpenToast] = useState(false)
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
              <Button variant="blue" onClick={() => setOpenToast(true)}>Salvar</Button>
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

export default App


