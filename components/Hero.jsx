import HeaderSubheader from "./HeaderSubheader"

const Hero = ({ header, subheader }) => {
  return (
    <div className="h-screen md:h-96 py-12 md:py-24">
      <HeaderSubheader header={header} subheader={subheader} />
    </div>
  )
}

export default Hero