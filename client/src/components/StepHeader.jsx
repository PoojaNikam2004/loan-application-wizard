function StepHeader({ title, subtitle }) {
  return (
    <div className="mb-4">

      <h2 className="fw-bold text-primary mb-2">
        {title}
      </h2>

      <p className="text-muted">
        {subtitle}
      </p>

      <hr />

    </div>
  );
}

export default StepHeader;