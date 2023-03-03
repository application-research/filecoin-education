export default function PixelsSVG(props: any) {
  return (
    <svg {...props} width={props?.width ? props.width : '153'} height={props?.height ? props.height : '103'} viewBox="0 0 153 103" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M101.312 51.1992L152.479 51.1992L152.479 0.00012207L101.312 0.000126543L101.312 51.1992Z" fill="black" />
      <path d="M50.1445 102.398L101.312 102.398L101.312 51.1989L50.1445 51.1989L50.1445 102.398Z" fill="black" />
      <path d="M2.67029e-05 52.208L51.167 52.208L51.167 1.00891L2.22269e-05 1.00892L2.67029e-05 52.208Z" fill="black" />
    </svg>
  );
}
