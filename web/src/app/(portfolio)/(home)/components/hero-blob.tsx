import type { SVGProps } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const heroBlob = tv({
	slots: {
		root: "w-[12.5rem] fill-primary md:w-[16.875rem] lg:w-80",
		img: "w-[10.625rem]",
	},
});

interface IHeroBlob
	extends SVGProps<SVGSVGElement>,
		VariantProps<typeof heroBlob> {
	imageUrl: string;
}

export function HeroBlob({ className, imageUrl, ...rest }: IHeroBlob) {
	const { root, img } = heroBlob();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={root({ className })}
			viewBox="0 0 200 187"
			{...rest}
		>
			<title>Hero blob</title>
			<mask id="a" mask-type="alpha">
				<path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486Z" />
			</mask>
			<g mask="url(#a)">
				<path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486Z" />
				<image x={12} y={0} className={img()} href={imageUrl} />
			</g>
		</svg>
	);
}
