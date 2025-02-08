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

export default function LoginPage() {
  return (
    <div className="h-full rounded-xl bg-white/20 px-20 py-10 font-montserrat shadow-xl">
      <Heading textAlign="center" size="3xl" mb={6} color="white">
        Get Started
      </Heading>
      <form>
        <Field label="Email" gap={0.5}>
          <Input bg="white" size="xs" placeholder="Email" />
        </Field>

        <Field label="Password" mt={3} gap={0.5}>
          <Input bg="white" size="xs" placeholder="Password" />
        </Field>

        <Field label="Confirm Password" mt={3} gap={0.5}>
          <Input bg="white" size="xs" placeholder="Confirm Password" />
        </Field>
        <HStack color="white" my={5}>
          <Separator flex="1"></Separator>
          <Text flexShrink="0">OR</Text>
          <Separator flex="1"></Separator>
        </HStack>

        <Button
          size="xs"
          colorScheme="red"
          width="100%"
          borderRadius={0}
          transition={"all 0.2s ease-in-out"}
          _hover={{ borderRadius: 12, transition: "all 0.2s ease-in-out" }}
        >
          <FaGoogle className="fill-red-600" />
          Continue with Google
        </Button>

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
        <Button
          size="xs"
          mx="auto"
          display="block"
          type="submit"
          className="get-started__container"
          borderRadius={0}
          transition={"all 0.2s ease-in-out"}
          _hover={{ borderRadius: 12, transition: "all 0.2s ease-in-out" }}
        >
          Create account
        </Button>
      </form>

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
