import { Box, Center } from "@chakra-ui/react";
import React from "react";
import "../../styles/premium-page.css";

export default function PremiumPage() {
  return (
    <Box height="100%" as={Center} position="relative">
      <div>Test</div>

      <Box
        className="premium-page__overlay-bg"
        position="absolute"
        inset={0}
        zIndex={100}
      />
    </Box>
  );
}
