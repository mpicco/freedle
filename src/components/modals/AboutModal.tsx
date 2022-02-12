import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Freedle is the word game for those who want to be FREE to see the world they way THEY like it!
      <br/></p>
      <br/>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      This SATIRICAL version of Wordle is for Freedom Lovers! Some of the important changes that true patriots are sure to love include:
      <br/></p>
      <br/>LOSER words that nobody knows anyway have been removed from the list of possible answers, leaving only REAL words for speaking the TRUTH
      <br/><br/>People are saying on the internet that the letter W is really the same sex marriage of two Us, so all words containing W have been removed so people are FREE not to be made uncomfortable by THOSE words
      <br/><br/>Some other words whose lives don't matter have also been removed
      <br/><br/>Some proper names have been added ... you can probably guess who they are
      <br/>
      <br/>

       <p className="text-sm text-gray-500 dark:text-gray-300">
        Remember folks, this was done just for laughs.  You're FREE to enjoy or ignore it. </p>
    </BaseModal>
  )
}
