import { Box, Flex, Circle, Text, Divider } from "@chakra-ui/react";
import { useState } from "react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

function CustomStepper() {
  const [activeStep, setActiveStep] = useState(1); // step index (0-based)

  return (
    <Flex direction="column" gap={6} position="relative">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;

        return (
          <Flex key={index} align="start">
            {/* Step Indicator */}
            <Flex direction="column" align="center" mr={4}>
              <Circle
                size="30px"
                bg={isCompleted ? "green.500" : isActive ? "blue.500" : "gray.300"}
                color="white"
                fontWeight="bold"
              >
                {isCompleted ? "✓" : index + 1}
              </Circle>

              {/* Connector line */}
              {index !== steps.length - 1 && (
                <Box flex="1" height="40px">
                  <Divider
                    orientation="vertical"
                    borderColor={isCompleted ? "green.500" : "gray.300"}
                    borderWidth="2px"
                  />
                </Box>
              )}
            </Flex>

            {/* Step Content */}
            <Box>
              <Text fontWeight={isActive ? "bold" : "normal"}>{step.title}</Text>
              <Text fontSize="sm" color="gray.500">
                {step.description}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default CustomStepper;
