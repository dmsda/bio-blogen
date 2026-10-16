import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { ProfileEditor } from './components/ProfileEditor';
import { LinksEditor } from './components/LinksEditor';
import { ThemeSelector } from './components/ThemeSelector';
import { SeoEditor } from './components/SeoEditor';
import { LivePreview } from './components/LivePreview';
import { ExportButton } from './components/ExportButton';
import { Docs } from './pages/Docs';
import { Showcase } from './pages/Showcase';

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#/cara-penggunaan') {
    return <Docs />;
  }

  if (hash === '#/showcase') {
    return <Showcase />;
  }

  const EditorArea = (
    <>
      <ProfileEditor />
      <LinksEditor />
      <ThemeSelector />
      <SeoEditor />
      <ExportButton />
    </>
  );

  return (
    <Layout
      editorContent={EditorArea}
      previewContent={<LivePreview />}
    />
  );
}

export default App;
