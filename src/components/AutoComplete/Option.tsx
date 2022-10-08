import React from 'react';
import Text from '~/components/Text';

export type AutoCompleteOptionType = {
  title: string;
  search?: string;
  className?: string;
  onSelect: (title: string) => void;
}

export default function Option(props: AutoCompleteOptionType) {
  const { title, onSelect = () => {}, search } = props;
  const onClick = () => {
    onSelect(title);
  }

  let lTitle = title.toLowerCase();
  let lSearch = search?.toLowerCase()!;

  let start = title;
  let match = '';
  let end = '';
  if (search) {
    const index = lTitle.indexOf(lSearch);
    start = title.slice(0, index);
    match = title.slice(index, index + search.length);
    end = title.slice(index + search.length);
  }

  return (
    <div
      onClick={onClick}
      className={[
        "dropdown-item",
        lSearch===lTitle ? 'dropdown-item-match' : '',
        props.className
      ].join(' ')}
    >
      <Text className="option-title">
        {start}<Text className="highlight">{match}</Text>{end}
      </Text>
    </div>
  )
}
