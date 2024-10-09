import '@/assets/styles/global.css'

// efficient SEO from server side
export const metadata = {
    title: "ground bnb",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental"
}

const MainLayout = ({ children }) => {
    return <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>;
}
 
export default MainLayout;