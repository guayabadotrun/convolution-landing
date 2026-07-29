import { useEffect, useState, FormEvent } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

export const LAUNCH_APP_URL = 'https://app.convolution.agency';
export const OPEN_COMING_SOON_EVENT = 'convolution:open-coming-soon';
const NOTIFY_COOKIE = 'convolution_notify_email';
const COOKIE_MAX_AGE_DAYS = 365;

export function openComingSoon() {
  window.dispatchEvent(new CustomEvent(OPEN_COMING_SOON_EVENT));
}

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  if (!match) return null;
  try {
    return decodeURIComponent(match.slice(name.length + 1));
  } catch {
    return null;
  }
}

function writeCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

const ComingSoonModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      setSubmitted(false);
      setSubmitting(false);
      setEmail('');
      setError(null);
      setIsOpen(true);
    };
    window.addEventListener(OPEN_COMING_SOON_EVENT, handler);
    return () => window.removeEventListener(OPEN_COMING_SOON_EVENT, handler);
  }, []);

  const close = () => setIsOpen(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    if (!email) return;
    const storedEmail = readCookie(NOTIFY_COOKIE);
    if (storedEmail) {
      setError(`This email is already on our list. We'll be in touch soon.`);
      return;
    }
    setSubmitting(true);
    // Simulate a tiny delay for a snappier feel
    setTimeout(() => {
      writeCookie(NOTIFY_COOKIE, email, COOKIE_MAX_AGE_DAYS);
      setSubmitting(false);
      setSubmitted(true);
    }, 350);
  };

  return (
    <Transition show={isOpen} appear>
      <Dialog as="div" className="relative z-50" onClose={close}>
        <TransitionChild
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        </TransitionChild>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-2"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-black-dark text-white shadow-2xl">
              {/* Gradient glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
                style={{ background: 'radial-gradient(circle, #6E1FCE 0%, transparent 70%)' }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
                style={{ background: 'radial-gradient(circle, #82EAFF 0%, transparent 70%)' }}
              />

              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>

              <div className="relative px-8 py-10 sm:px-12 sm:py-12">
                {!submitted ? (
                  <>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full  bg-white/5 px-3 py-1 text-xs uppercase tracking-widest font-afacad">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                      Coming soon
                    </div>
                    <DialogTitle className="font-anek-latin text-3xl font-semibold leading-tight">
                      Something big is on the way.
                    </DialogTitle>
                    <p className="mt-3 text-white/70 font-afacad">
                      Convolution is putting the final touches on the platform. Leave your email and we'll let you know the moment we go live.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="you@domain.com"
                        autoFocus
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? 'coming-soon-error' : undefined}
                        className={`flex-1 rounded-full border-2 bg-white/5 px-5 py-2.5 text-white placeholder-white/40 outline-none transition-colors font-afacad ${
                          error
                            ? 'border-red-400/70 focus:border-red-400'
                            : 'border-white/20 focus:border-white/60 focus:bg-white/10'
                        }`}
                      />
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-6 py-2.5 font-afacad uppercase text-black-dark transition-colors hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting ? 'Sending…' : 'Notify me'}
                      </button>
                    </form>
                    {error ? (
                      <p
                        id="coming-soon-error"
                        role="alert"
                        className="mt-3 text-xs text-red-400 font-afacad"
                      >
                        {error}
                      </p>
                    ) : (
                      <p className="mt-3 text-xs text-white/40 font-afacad">
                        Press Enter to submit. No spam, ever.
                      </p>
                    )}
                  </>
                ) : (
                  <div className="flex flex-col items-center text-center py-4 animate-[fadeIn_.3s_ease-out]">
                    <div className="relative mb-6">
                      <div
                        className="absolute inset-0 rounded-full blur-2xl opacity-70"
                        style={{ background: 'linear-gradient(90deg, #6E1FCE 0%, #82EAFF 100%)' }}
                      />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary">
                        <CheckIcon className="h-10 w-10 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <DialogTitle className="font-anek-latin text-3xl sm:text-4xl font-semibold">
                      You're on the list.
                    </DialogTitle>
                    <p className="mt-3 max-w-sm text-white/70 font-afacad">
                      Welcome to the inner circle. We'll reach out to{' '}
                      <span className="text-white font-medium">{email}</span> as soon as we go live.
                    </p>
                    <button
                      type="button"
                      onClick={close}
                      className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-white/60 px-8 py-2.5 font-afacad uppercase text-white transition-colors hover:bg-white hover:text-black-dark"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ComingSoonModal;
