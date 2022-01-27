const FormError = ({ text }) => (
  <section className="text-center p-1 mb-2 rounded border border-red-400 bg-red-400">
    <p className="text-red-500 text-xs ">{text}</p>
  </section>
);

export default FormError;
