export function getRelativeMousePosition(
  e: React.MouseEvent<HTMLElement> | MouseEvent,
  relativeElement: HTMLElement | null
) {
  const { clientX, clientY } = e;

  if (!relativeElement) {
    return [clientX, clientY];
  }

  const rect = relativeElement.getBoundingClientRect();

  return [
    clientX - rect.left - relativeElement.clientLeft,
    clientY - rect.top - relativeElement.clientTop,
  ];
}
