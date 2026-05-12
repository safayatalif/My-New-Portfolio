import ServiceSlider from '../../components/ServiceSlider'

const Services = () => {
  return (
    <div className="h-full py-8">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <h2 className="h2 mb-8">Services <span className="text-accent">.</span></h2>
        <p className="text-white/70 max-w-2xl mb-6">I provide a range of services from product design to frontend engineering. Below are the core offerings.</p>
        <ServiceSlider />
      </div>
    </div>
  )
}

export default Services;
