import { useState, useEffect } from "react";
import { Box, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import Header from "./Header";

function App() {
  const [images, setImages] = useState([]); 
  const [activeCategory, setActiveCategory] = useState("cat"); 
  const [loading, setLoading] = useState(true); 

  
  const fetchImages = () => {
    setLoading(true);

    const apiPets =
      activeCategory === "dog"
        ? "https://dog.ceo/api/breeds/image/random/10"
        : "https://api.thecatapi.com/v1/images/search?limit=10";

    fetch(apiPets)
      .then((res) => res.json(res))
      .then((data) => {
        setImages(activeCategory === "dog" ? data.message : data.map(cat => cat.url));
        setLoading(false);
      })
      
  };

  
  useEffect(() => {
    fetchImages();
  }, [activeCategory]);

  return (
    <Box textAlign="center" p={5}>
     
      <Header setActiveCategory={setActiveCategory} />

      {loading ? (
        <Spinner size="2xl" />
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={5}>
          {images.map((image, index) => (
            <Box key={index} p={8} boxShadow="2xl" borderRadius="2xl">
              <Image src={image} alt={`Animal ${index}`} borderRadius="2xl" />
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default App;
