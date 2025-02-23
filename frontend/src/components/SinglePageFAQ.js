import React from 'react';  
import {  
    Accordion,  
    AccordionItem,  
    AccordionButton,  
    AccordionPanel,  
    AccordionIcon,  
    Box,  
    Text,  
    Image,  
    VStack,  
} from '@chakra-ui/react';  
import aus from "../assets/aus.png";  

const SinglePageFAQ = () => {  
    return (  
        <VStack spacing={4} align="stretch" p={5} bg="gray.50" borderRadius="md" boxShadow="md">  
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">Frequently Asked Questions</Text>  
            <Accordion defaultIndex={[0]} allowMultiple>  
                <AccordionItem>  
                    <h2>  
                        <AccordionButton>  
                            <Box flex='1' textAlign='left' fontWeight="semibold">  
                                PRODUCT INFO  
                            </Box>  
                            <AccordionIcon />  
                        </AccordionButton>  
                    </h2>  
                    <AccordionPanel pb={4}>  
                        Did you know that 1 Sukin Hydrating Mist Toner is sold every 40 seconds!? Yep- if you haven't tried it, you need to. Our alcohol-free Mist Toner blends Chamomile and Rosewater to help soothe, purify and cool your tired skin. And did we mention it is the ultimate multi-use product? It can be used before and after cleansing, in the office as a 3pm pick-me-up, after makeup application to give you a dewy complexion, or just anytime your skin is feeling stressed or overheated! TIP: Keep in the refrigerator to instantly refresh skin on hot days. It is also amazing at blending concealer under the eyes with a beauty sponge!  
                    </AccordionPanel>  
                </AccordionItem>  

                <AccordionItem>  
                    <h2>  
                        <AccordionButton>  
                            <Box flex='1' textAlign='left' fontWeight="semibold">  
                                HOW TO USE  
                            </Box>  
                            <AccordionIcon />  
                        </AccordionButton>  
                    </h2>  
                    <AccordionPanel pb={4}>  
                        Close eyes, spray onto face and neck. Use throughout the day to refresh and hydrate dry skin.  
                    </AccordionPanel>  
                </AccordionItem>  

                <AccordionItem>  
                    <h2>  
                        <AccordionButton>  
                            <Box flex='1' textAlign='left' fontWeight="semibold">  
                                THE INGREDIENTS  
                            </Box>  
                            <AccordionIcon />  
                        </AccordionButton>  
                    </h2>  
                    <AccordionPanel pb={4}>  
                        Water (Aqua), Rosa Damascena Flower Water (Rose), Glycerin, Chamomilla Recutita (Matricaria) Flower Extract (Chamomile), Citric Acid, Phenoxyethanol.  
                    </AccordionPanel>  
                </AccordionItem>  

                <AccordionItem>  
                    <h2>  
                        <AccordionButton>  
                            <Box flex='1' textAlign='left' fontWeight="semibold">  
                                BRAND VALUES  
                            </Box>  
                            <AccordionIcon />  
                        </AccordionButton>  
                    </h2>  
                    <AccordionPanel pb={4}>  
                        <Image src={aus} alt="Brand Values" borderRadius="md" />  
                    </AccordionPanel>  
                </AccordionItem>  
            </Accordion>  
        </VStack>  
    );  
};  

export default SinglePageFAQ;