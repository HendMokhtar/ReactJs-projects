import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import ReactPaginate from 'react-paginate';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export default function App() {
  const[currentPage, setCurrentPage] = React.useState(0)
  const [paginatedData, setPaginatedData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const fetchingData = React.useCallback(async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    if (data) {
      setPaginatedData(data)
      setLoading(false)
    } else {
      setPaginatedData([])
      setLoading(false)
    }
    },[])
 
  React.useEffect(() => {
   fetchingData()
  }, [fetchingData])
  
  if (loading) {
    return (
      <section className='section-title'>
        <h1>Loading...</h1>
        <div className='underline'></div>
      </section>
    )
  }
  const PER_PAGE = 10
  const offset = currentPage + PER_PAGE
  const currentPageData = paginatedData.slice(offset, offset + PER_PAGE)
    .map(item => {
      return (
        <Col key={item.id}>
        <Card>
        <Card.Img variant="top" src={item.avatar_url} />
        <Card.Body>
          <Card.Title>{item.login}</Card.Title>
          <Button className='btn'  href={item.html_url} variant="primary">view people</Button>
        </Card.Body>
        </Card>
        </Col>
    )
  })
  const pageCount = Math.ceil(paginatedData.length / PER_PAGE);

  // Invoke when user click to request another page.
  function handlePageClick({selected: selectedPage }) {
      setCurrentPage(selectedPage)  
    }
  

  return (
    <main>
      <div className='container'>
      <section className='section-title'>
      <h1>Pagination</h1>
      <div className='underline'></div>
      </section>
      <section className='followers m-5'>
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
            {currentPageData}
        </Row>
        <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={"btn disabled"}
        activeClassName={"btn active"}
      />
      </section> 
      </div>
    </main>
  )
    
}
