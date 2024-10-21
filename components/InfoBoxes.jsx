import InfoBox from "@/components/InfoBox"

const InfoBoxes = () => {
  return (
    <section>
      <div className="container w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg mx-auto">
          <InfoBox
            heading="Is it Recyclable?"
            description="Find out what items can be recycled and where"
            buttonInfo={{
              text: "What Goes Where",
              link: "/whatGoesWhere",
              backgroundColor: "bg-black"
            }}
          />
          <InfoBox
            heading="The Benefits of Recycling"
            description="Learn about the benefits of recycling and how it helps the environment."
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Learn More",
              link: "/benefits",
              backgroundColor: "bg-blue-500"
            }}
          />
          <InfoBox
            heading="Where to Recycle"
            description="Find out where you can recycle in your area."
            backgroundColor="bg-green-100"
            buttonInfo={{
              text: "Learn More",
              link: "/pickupSchedule",
              backgroundColor: "bg-green-500"
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default InfoBoxes