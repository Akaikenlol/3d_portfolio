interface ButtonProps {
	id: string;
	text: string;
	className?: string;
}

const Button = ({ className, id, text }: ButtonProps) => {
	return (
		<a className={`${className ?? ""} cta-wrapper`}>
			<div className="cta-button group">
				<div className="bg-circle" />
				<p className="text">{text}</p>
				<div className="arrow-wrapper">
					<img src="/images/arrow-down.svg" alt="arrow" />
				</div>
			</div>
		</a>
	);
};

export default Button;
