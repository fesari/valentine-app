import { useEffect, useState } from "react"
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal"
import { RippleButton } from "@/components/ui/ripple-button"
import "./ValentineTerminal.css"

const ValentineTerminal = ({ onComplete }) => {
  const [showButtons, setShowButtons] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [hideTerminal, setHideTerminal] = useState(false)

  // Show buttons after all text is typed (run once)
  useEffect(() => {
    const t = setTimeout(() => setShowButtons(true), 8000)
    return () => clearTimeout(t)
  }, [])

  // When answer becomes "yes", trigger the transition
  useEffect(() => {
    if (answer === "yes") {
      // let them see the heart first, then fade out & continue
      setTimeout(() => {
        setHideTerminal(true)
        setTimeout(() => {
          onComplete?.()
        }, 600)
      }, 2000)
    }
  }, [answer, onComplete])

  const handleYes = () => {
    setAnswer("yes")
  }

  const handleNo = () => {
    setAnswer("no")
  }

  const handleRetry = () => {
    setAnswer("yes")
  }

  // If answer is set, show response instead of terminal
  if (answer === "yes") {
    return (
      <div className={`valentine-terminal-container ${hideTerminal ? "hidden" : ""}`}>
        <div className="valentine-terminal">
          <pre className="p-4">
            <code className="grid gap-y-1 overflow-auto">
              <AnimatedSpan><br /></AnimatedSpan>
              <AnimatedSpan>
                <pre className="ascii-heart" style={{ margin: 0, padding: 0 }}>{`
    ♥♥♥♥♥       ♥♥♥♥♥
  ♥♥♥♥♥♥♥♥   ♥♥♥♥♥♥♥♥
 ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥
 ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥
  ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥
   ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥
     ♥♥♥♥♥♥♥♥♥♥♥♥♥
       ♥♥♥♥♥♥♥♥♥
         ♥♥♥♥♥
           ♥
              `}</pre>
              </AnimatedSpan>
              <TypingAnimation className="font-bold">
                yay! ❤️
              </TypingAnimation>
            </code>
          </pre>
        </div>
      </div>
    )
  }

  if (answer === "no") {
    return (
      <div className="valentine-terminal-container">
        <div className="valentine-terminal">
          <pre className="p-4">
            <code className="grid gap-y-1 overflow-auto">
              <AnimatedSpan><br /></AnimatedSpan>
              <TypingAnimation>
                well too bad, you have to say yes mwahahahah
              </TypingAnimation>
              <AnimatedSpan>
                <div className="button-container retry">
                  <RippleButton rippleColor="#10b981" onClick={handleRetry} className="terminal-button yes-button">
                    fine, yes
                  </RippleButton>
                </div>
              </AnimatedSpan>
            </code>
          </pre>
        </div>
      </div>
    )
  }

  return (
    <div className="valentine-terminal-container">
      <Terminal className="valentine-terminal" sequence={true}>
        <TypingAnimation>&gt; hey alice, i know valentine's day is coming up and i wanted to make you a special gift that you could remember...</TypingAnimation>
        <AnimatedSpan><br /></AnimatedSpan>

        <TypingAnimation>but the issue is i'm not very crafty!</TypingAnimation>
        <AnimatedSpan><br /></AnimatedSpan>

        <TypingAnimation>so instead i made you this website...</TypingAnimation>
        <AnimatedSpan><br /></AnimatedSpan>

        <TypingAnimation>but the most important question before you continue to the site is...</TypingAnimation>
        <AnimatedSpan><br /></AnimatedSpan>

        <TypingAnimation className="text-red-400 font-bold">will you be my valentine?</TypingAnimation>

        {showButtons && !answer && (
          <AnimatedSpan>
            <div className="button-container">
              <RippleButton rippleColor="#10b981" onClick={handleYes} className="terminal-button yes-button">yes</RippleButton>
              <RippleButton rippleColor="#dc2626" onClick={handleNo} className="terminal-button no-button">no</RippleButton>
            </div>
          </AnimatedSpan>
        )}
      </Terminal>
    </div>
  )
}

export default ValentineTerminal