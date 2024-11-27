// app/components/PortfolioAdvertisement.js
const PortfolioAdvertisement = () => (
    <div className="bg-white shadow-sm rounded-lg p-3 mt-6 text-center">
      <h2 className="text-sm font-semibold mb-2">Need a Professional Website?</h2>
      <p className="text-xs mb-2">
        I specialize in creating user-friendly, custom websites tailored to your business needs.
      </p>
      <div className="space-y-1">
        <p className="text-xs">Contact Me:</p>
        <p className="text-xs text-gray-600">
          📱 Call: <span  className="text-blue-500 hover:underline">+47387592</span>
        </p>
        <p className="text-xs text-gray-600">📧 Email: <span className="text-blue-500">your-email@example.com</span></p>
      </div>
      <a
        href="https://wa.me/47387592"
        className="mt-3 inline-block bg-primary text-white px-3 py-1 rounded-md hover:bg-secondary transition text-xs"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
  
  export default PortfolioAdvertisement;
  