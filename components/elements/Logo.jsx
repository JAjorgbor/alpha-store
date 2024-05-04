const Logo = ({ className, ...props }) => {
  return (
    <p className={`font-bold text-2xl ${className}`} {...props}>
      Alpha Store
    </p>
  );
};
export default Logo;
