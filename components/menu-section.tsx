"use client"

export function MenuSection() {
  return (
    <section id="menu" className="pb-16 pt-4 bg-[#F6EEE5]">

      <div className="w-[90%] mx-auto">
        <img
          src="/images/menu/hotcoffee.png"
          alt="Brownland Coffee Menu"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-[90%] mx-auto">
        <img
          src="/images/menu/shake.png"
          alt="Brownland Coffee Menu"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-[90%] mx-auto">
        <img
          src="/images/menu/sandwich.png"
          alt="Brownland Coffee Menu"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-[90%] mx-auto">
        <img
          src="/images/menu/combos.png"
          alt="Brownland Coffee Menu"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}