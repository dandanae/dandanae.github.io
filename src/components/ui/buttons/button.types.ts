export interface IconButtonProps {
  /** [구글 머티리얼 심볼](https://fonts.google.com/icons?icon.set=Material+Symbols) */
  icon: string
  ariaLabel: string
  onClick: () => void
  /** @default 'button' */
  type?: 'button' | 'submit'
  /**  @default false */
  disabled?: boolean
  /**
   * - `mobile`: 모바일에서만 표시
   * - `desktop`: 데스크탑에서만 표시
   * - `all`: 어느 플랫폼이든 표시
   * @default 'all'
   */
  display?: 'mobile' | 'desktop' | 'all'
  title?: string
  className?: (string | boolean) | (string | boolean)[]
}
