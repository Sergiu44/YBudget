import {
  Heading,
  HStack,
  Separator,
  Input,
  Text,
  Link as Anchor,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { signIn } from "@/app/configs/auth";

export default async function LoginPage() {
  return (
    <div className="h-full rounded-xl bg-white/20 px-20 py-10 font-montserrat shadow-xl">
      <Heading textAlign="center" size="3xl" mb={6} color="white">
        Get Started
      </Heading>
      <form
        id="form-credentials"
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <Field label="Email" gap={0.5}>
          <Input
            name="email"
            type="email"
            bg="white"
            size="xs"
            placeholder="Email"
          />
        </Field>

        <Field label="Password" mt={3} gap={0.5}>
          <Input
            name="password"
            type="password"
            bg="white"
            size="xs"
            placeholder="Password"
          />
        </Field>
        <Button
          size="xs"
          mx="auto"
          display="block"
          type="submit"
          className="get-started__container"
          borderRadius={0}
          mt={4}
          transition={"all 0.2s ease-in-out"}
          _hover={{ borderRadius: 12, transition: "all 0.2s ease-in-out" }}
          form="form-credentials"
        >
          Create account
        </Button>
      </form>

      <HStack color="white" my={5}>
        <Separator flex="1"></Separator>
        <Text flexShrink="0">OR</Text>
        <Separator flex="1"></Separator>
      </HStack>

      <form
        id="form-google"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button
          size="xs"
          colorScheme="red"
          width="100%"
          borderRadius={0}
          transition={"all 0.2s ease-in-out"}
          _hover={{ borderRadius: 12, transition: "all 0.2s ease-in-out" }}
          type="submit"
          form="form-google"
        >
          <FaGoogle className="fill-red-600" />
          Continue with Google
        </Button>
      </form>

      <Button
        size="xs"
        width="100%"
        colorPalette={"blue"}
        my={2}
        borderRadius={0}
        transition={"all 0.2s ease-in-out"}
        _hover={{ borderRadius: 12, transition: "all 0.2s ease-in-out" }}
      >
        <FaGoogle className="fill-blue-600" />
        Continue with Facebook
      </Button>

      <Anchor
        display="block"
        fontSize="12px"
        textAlign="center"
        mt={4}
        as={Link}
        href="/auth/get-started"
      >
        Don&apos;t have an account yet? Create here
      </Anchor>
    </div>
  );
}
