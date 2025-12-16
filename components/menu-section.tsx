"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const foodImages = [
  "/images/img-6403.jpeg",
  "/images/img-6398.jpeg",
  "/images/img-6400.jpeg",
  "/images/img-6410.jpeg",
  "/images/img-6411.jpeg",
  "/images/img-6402.jpeg",
  "/images/img-6414.jpeg",
  "/images/img-6412.jpeg",
]

const menuData = {
  sandwiches: [
    { name: "Butter Toast", price: 40 },
    { name: "Cheese Sandwich", price: 70 },
    { name: "Veg Cheese Sandwich", price: 90, tag: "Jain" },
    { name: "Chocolate Sandwich", price: 90, bestseller: true },
    { name: "Bombay Masala Sandwich", price: 120, bestseller: true },
    { name: "Mexican Sandwich", price: 150 },
    { name: "Jain Cheese Corn Sandwich", price: 150 },
  ],
  icedBrews: [
    { name: "Iced Lemon Tea", price: 80 },
    { name: "Iced Americano", price: 90, tag: "No Sugar, No Milk" },
    { name: "Iced Peach Tea", price: 90 },
    { name: "Iced Mocha", price: 90 },
    { name: "Iced Chocolate", price: 90 },
    { name: "Browncoffee", price: 90 },
    { name: "Brownchino", price: 100, tag: "Ice Latte" },
    { name: "Brownlano", price: 100, bestseller: true, tag: "Cold Coffee" },
    { name: "Iced Lemon Americano", price: 100 },
    { name: "Iced Nutella Chocolate", price: 100 },
    { name: "Iced Nutella Coffee", price: 100 },
    { name: "Iced Biscoff Coffee", price: 120 },
    { name: "Orange Americano", price: 120 },
    { name: "Iced Nutella Biscoff Coffee", price: 140, bestseller: true },
  ],
  thickShakes: [
    { name: "Brownland Cold Coffee", price: 110, bestseller: true },
    { name: "Butterscotch Shake", price: 110 },
    { name: "Oreo Shake", price: 130 },
    { name: "Strawberry Shake", price: 130 },
    { name: "Blueberry Shake", price: 130 },
    { name: "Mocha Shake", price: 150 },
    { name: "Kit-Kat Shake", price: 150 },
    { name: "Brownie Shake", price: 150, bestseller: true },
    { name: "Chocolate Shake", price: 150 },
    { name: "Hazelnut Shake", price: 150 },
    { name: "Nutella Coffee Shake", price: 150 },
    { name: "Lotus Biscoff Shake", price: 180 },
    { name: "Nutella Biscoff Coffee Shake", price: 200, bestseller: true },
    { name: "Try Your Own", price: 200, bestseller: true },
  ],
  hotCoffee: [
    { name: "Black Coffee", price: 50 },
    { name: "Hot Latte", price: 60 },
    { name: "Hot Cappuccino", price: 60 },
    { name: "Signature Hot Coffee", price: 60, bestseller: true },
    { name: "Hot Chocolate", price: 70 },
    { name: "Hot Mocha", price: 70 },
    { name: "Hot Nutella Coffee", price: 90 },
  ],
  specials: [
    { name: "Korean Cream Cheese Bun", price: 120, bestseller: true },
    { name: "Masala Tea", price: 60, bestseller: true },
    { name: "Hibiscus Tea", price: 90, tag: "Sugar Free" },
    { name: "Instant Coffee Powder", price: 150, tag: "Take Home" },
  ],
}

function MenuItem({ item }: { item: { name: string; price: number; bestseller?: boolean; tag?: string } }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 group hover:bg-secondary/30 px-3 -mx-3 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <span className="text-foreground group-hover:text-primary transition-colors">{item.name}</span>
        {item.bestseller && <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">Best Seller</Badge>}
        {item.tag && <span className="text-xs text-muted-foreground">({item.tag})</span>}
      </div>
      <span className="text-primary font-semibold">₹{item.price}/-</span>
    </div>
  )
}

export function MenuSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % foodImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="menu" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {foodImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 aos-fade-up">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Discover</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Menu</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From signature cold coffees to thick creamy shakes, every sip is crafted with love
          </p>
        </div>

        <div className="aos-fade-up" style={{ transitionDelay: "0.2s" }}>
          <Tabs defaultValue="icedBrews" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-8 h-auto">
              <TabsTrigger
                value="icedBrews"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm"
              >
                Iced Brews
              </TabsTrigger>
              <TabsTrigger
                value="thickShakes"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm"
              >
                Thick Shakes
              </TabsTrigger>
              <TabsTrigger
                value="hotCoffee"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm"
              >
                Hot Coffee
              </TabsTrigger>
              <TabsTrigger
                value="sandwiches"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm"
              >
                Sandwiches
              </TabsTrigger>
              <TabsTrigger
                value="specials"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm"
              >
                Specials
              </TabsTrigger>
            </TabsList>

            <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-border">
              <TabsContent value="icedBrews" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-8">
                  {menuData.icedBrews.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="thickShakes" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-8">
                  {menuData.thickShakes.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="hotCoffee" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-8">
                  {menuData.hotCoffee.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sandwiches" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-8">
                  {menuData.sandwiches.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specials" className="mt-0">
                <div className="grid md:grid-cols-2 gap-x-8">
                  {menuData.specials.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div
          className="mt-12 bg-primary/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-primary/20 aos-fade-up"
          style={{ transitionDelay: "0.3s" }}
        >
          <h3 className="text-xl font-bold text-primary mb-6 text-center">Combo Deals</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center border border-border">
              <p className="text-foreground font-medium mb-2">Signature Hot Coffee + Bombay Masala Sandwich</p>
              <p className="text-primary text-xl font-bold">₹150/-</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center border border-border">
              <p className="text-foreground font-medium mb-2">Cold Coffee + Veg Cheese Sandwich</p>
              <p className="text-primary text-xl font-bold">₹170/-</p>
            </div>
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 text-center border border-border">
              <p className="text-foreground font-medium mb-2">Brownlano / Iced Mocha + Bombay Masala</p>
              <p className="text-primary text-xl font-bold">₹180/-</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
