import { useState } from 'react';
import { Paw, Heart, Info, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dogBreeds = [
  { name: 'Labrador Retriever', description: 'Friendly and outgoing', image: 'https://images.unsplash.com/photo-1579213838058-0a0a0e5a3648?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'German Shepherd', description: 'Intelligent and versatile', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Golden Retriever', description: 'Gentle and affectionate', image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Bulldog', description: 'Calm and courageous', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Beagle', description: 'Merry and curious', image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4 flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paw className="mr-2" /> Paw-some Pals
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Discover the wonderful world of dogs!
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 flex items-center">
            <Heart className="mr-2 text-red-500" /> Why Dogs are Amazing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Heart />, title: "Unconditional Love", description: "Dogs offer pure, unconditional love to their human companions." },
              { icon: <Info />, title: "Emotional Support", description: "They provide comfort and support during tough times." },
              { icon: <Award />, title: "Loyal Companions", description: "Dogs are known for their unwavering loyalty and friendship." }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Popular Dog Breeds</h2>
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
            <TabsContent value="gallery">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dogBreeds.map((breed) => (
                  <Card key={breed.name} className="overflow-hidden">
                    <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover" />
                    <CardHeader>
                      <CardTitle>{breed.name}</CardTitle>
                      <CardDescription>{breed.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button onClick={() => setSelectedBreed(breed)}>Learn More</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="list">
              <ul className="space-y-2">
                {dogBreeds.map((breed) => (
                  <li key={breed.name} className="flex items-center space-x-2">
                    <Paw className="text-blue-500" />
                    <span className="font-semibold">{breed.name}</span>
                    <span className="text-gray-600">- {breed.description}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </section>

        {selectedBreed && (
          <motion.div 
            className="mt-8 bg-blue-100 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{selectedBreed.name}</h3>
            <img src={selectedBreed.image} alt={selectedBreed.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-lg">{selectedBreed.description}</p>
            <Button className="mt-4" onClick={() => setSelectedBreed(null)}>Close</Button>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Index;
