export default function Hero({ onGetStartedClick }: { onGetStartedClick: () => void }) {
  return (
    <button onClick={onGetStartedClick} className="bg-[#79443B] text-white px-6 py-3 rounded-lg">
      Get Started
    </button>
  )
}