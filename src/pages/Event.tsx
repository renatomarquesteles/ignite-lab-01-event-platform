import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <div id="video" className="flex-1" />
        <Sidebar />
      </main>
    </div>
  );
}
