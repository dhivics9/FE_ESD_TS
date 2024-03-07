interface AvatarProps {
  src: string;
  className?: string;
}

const Avatar = ({ src, className = "w-16 rounded-xl" }: AvatarProps) => {
  return (
    <div className="avatar">
      <div className={className}>
        <img src={src} />
      </div>
    </div>
  );
};

export default Avatar;
