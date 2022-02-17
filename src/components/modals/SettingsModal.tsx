import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
    isHighContrastMode,
    handleHighContrastMode,
  isDarkMode,
  handleDarkMode,
}: Props) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="grid-cols-2 gap-4">
        <SettingsToggle
            settingName="Hard Mode"
            flag={isHardMode}
            handleFlag={handleHardMode}
        />
        <SettingsToggle
          settingName="Dark Mode"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
            settingName="High Contrast Mode"
            flag={isHighContrastMode}
            handleFlag={handleHighContrastMode}
        />
      </div>
    </BaseModal>
  )
}
