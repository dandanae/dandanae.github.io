import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/ko'

// 플러그인 등록
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)

// 한국어 로케일 설정
dayjs.locale('ko')

// 기본 타임존을 한국 시간으로 설정
dayjs.tz.setDefault('Asia/Seoul')

export default dayjs
