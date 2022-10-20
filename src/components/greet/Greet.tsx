interface IProps {
  name?: string;
}

export const Greet: React.FC<IProps> = ({ name }) => {
  return <div>Hello {name ? name : 'Guest'}</div>;
};
