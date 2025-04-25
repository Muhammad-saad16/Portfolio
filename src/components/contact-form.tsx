

// "use client"

// import { motion } from "framer-motion"
// import { Send } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useForm, ValidationError } from "@formspree/react"

// export default function ContactForm() {
//   const [state, handleSubmit] = useForm("mqaprqpb") // Your Formspree form ID

//   return (
//     <div className="bg-card border border-border rounded-xl p-6 md:p-8">
//       {state.succeeded ? (
//         <div className="flex flex-col items-center justify-center text-center py-8">
//           <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
//             <Send className="h-8 w-8 text-primary" />
//           </div>
//           <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
//           <p className="text-muted-foreground mb-6">
//             Thank you for reaching out. I'll get back to you as soon as possible.
//           </p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label htmlFor="name" className="text-sm font-medium">
//                 Name
//               </label>
//               <Input id="name" name="name" placeholder="Your name" required className="bg-background" />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="email" className="text-sm font-medium">
//                 Email
//               </label>
//               <Input id="email" name="email" type="email" placeholder="Your email" required className="bg-background" />
//               <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500" />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <label htmlFor="subject" className="text-sm font-medium">
//               Subject
//             </label>
//             <Input
//               id="subject"
//               name="subject"
//               placeholder="Subject of your message"
//               required
//               className="bg-background"
//             />
//           </div>

//           <div className="space-y-2">
//             <label htmlFor="message" className="text-sm font-medium">
//               Message
//             </label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder="Your message"
//               rows={6}
//               required
//               className="bg-background resize-none"
//             />
//             <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500" />
//           </div>

//           <Button type="submit" className="w-full md:w-auto" disabled={state.submitting}>
//             {state.submitting ? (
//               <>
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
//                   className="mr-2"
//                 >
//                   <Send className="h-4 w-4" />
//                 </motion.div>
//                 Sending...
//               </>
//             ) : (
//               <>
//                 <Send className="mr-2 h-4 w-4" />
//                 Send Message
//               </>
//             )}
//           </Button>
//         </form>
//       )}
//     </div>
//   )
// }
"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqaprqpb") // Your Formspree form ID

  return (
    <div className="bg-card border border-border rounded-xl p-6 md:p-8">
      {state.succeeded ? (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Send className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required className="bg-background" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                className="bg-background"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-sm text-red-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject of your message"
              required
              className="bg-background"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={6}
              required
              className="bg-background resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-sm text-red-500"
            />
          </div>

          <Button type="submit" className="w-full md:w-auto" disabled={state.submitting}>
            {state.submitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" }}
                  className="mr-2"
                >
                  <Send className="h-4 w-4" />
                </motion.div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
