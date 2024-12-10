
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../footer';
import CoinsPlugin from '../coinsPlugin';
const ErrorPage = () => {
  return (
      <div className='content'>
        <section className='error-page-section'>
          <div className="error-page">
            <CoinsPlugin/>
            <div className='error-page-content'>
              <div>
                <h1>Page Under Construction</h1>
                <p>Return to main page</p>
                <Link href="/" className='error-page-btn'>Go to Main page</Link>
              </div>
              <div>
                <Image src='/assets/img/franklin-error.png' alt='franklin error' width={340} height={360}/>
              </div>
            </div>
          </div>
          <Footer/>
        </section>
      </div>
  );
}
export default ErrorPage;
