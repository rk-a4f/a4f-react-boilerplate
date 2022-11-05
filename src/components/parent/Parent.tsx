import React, { memo, useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

interface ParentProps {
  title: string;
  description?: string;
  onTitleClick: () => void;
  onDescriptionClick?: () => void;
}

const Parent: React.FC<ParentProps> = ({
  title,
  description = '',
  onTitleClick,
  onDescriptionClick = noop,
}: ParentProps) => {
  const visibleDescription = useMemo(() => {
    return !!description;
  }, [description]);

  return (
    <div>
      <button onClick={onTitleClick}>title: {title}</button>
      {visibleDescription && (
        <button onClick={onDescriptionClick}>description: {description}</button>
      )}
    </div>
  );
};

export default memo(Parent);
