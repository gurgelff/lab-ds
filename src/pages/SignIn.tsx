import { Envelope, Lock } from "phosphor-react";
import {FormEvent, useState} from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function SignIn() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  // simulates login

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    setIsUserSignedIn(true);
  };

  return (
    <div className="w-screen h-screen pl-2 pr-2 bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        
        { isUserSignedIn && <Text>Login realizado com sucesso!</Text> }

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de Email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu Email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="font-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
          asChild
        >
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text
          size="sm"
          className="text-gray-400 underline hover:text-gray-200"
          asChild
        >
          <a href="">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  );
}
