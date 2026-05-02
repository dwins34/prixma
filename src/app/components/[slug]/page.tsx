import { notFound } from 'next/navigation';
import InstallationPage  from '../sections/Installation';
import ButtonPage        from '../sections/ButtonSection';
import InputPage         from '../sections/InputSection';
import CheckboxPage      from '../sections/CheckboxSection';
import ChipPage          from '../sections/ChipSection';
import ProgressPage      from '../sections/ProgressSection';
import StepperPage       from '../sections/StepperSection';
import SwitchPage        from '../sections/SwitchSection';
import TogglePage        from '../sections/ToggleSection';
import UploaderPage      from '../sections/UploaderSection';

const PAGES: Record<string, React.ComponentType> = {
  installation: InstallationPage,
  button:       ButtonPage,
  input:        InputPage,
  checkbox:     CheckboxPage,
  chip:         ChipPage,
  progress:     ProgressPage,
  stepper:      StepperPage,
  switch:       SwitchPage,
  toggle:       TogglePage,
  uploader:     UploaderPage,
};

export function generateStaticParams() {
  return Object.keys(PAGES).map(slug => ({ slug }));
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const Page = PAGES[slug];
  if (!Page) notFound();
  return <Page />;
}
