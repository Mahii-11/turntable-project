const FeatureList = ({ features = [] }) => {
  if (!features.length) return null;

  return (
    <ul
      className="mt-4 list-disc list-inside text-sm text-gray-300"
      aria-label="Features"
    >
      {features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  );
};

export default FeatureList;
