# constants

## 파일 네이밍

- xxx.constants.ts
- xxx 기준은
  - router 경로 별 폴더 구성

## 작성 방식

- 작성 방식은 진행하면서 다시 논의

```ts
import type { ValuesType } from 'utility-types';

export const CALENDAR_WIDGET_FREE_BUSY_TABLE_DATA_KEY = {
  BUSY: 'busy',
  ABSENCE: 'absence',
} as const;

export type CALENDAR_WIDGET_FREE_BUSY_TABLE_DATA_KEY = ValuesType<
  typeof CALENDAR_WIDGET_FREE_BUSY_TABLE_DATA_KEY
>;

export type CalendarWidgetFreeBusyTableDataKey = ValuesType<
  typeof CALENDAR_WIDGET_FREE_BUSY_TABLE_DATA_KEY
>;
```

- TODO: 추가 상세 내용, 작성 예정
