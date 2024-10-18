import { ImageList, ImageListItem } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    }
}

const itemData = [
    {
        img: './public/1a.jpg',
        title: 'Breakfast',
        rows: 1,
        cols: 2,
    },
    {
        img: './public/2a.jpg',
        title: 'Burger',
        rows: 1,
        cols: 2,
    },
    {
        img: './public/3a.jpg',
        title: 'Camera',
        rows: 2,
        cols: 2,
    },
    {
        img: './public/4a.jpg',
        title: 'Coffee',
        rows: 2,
        cols: 1,
    },
    {
        img: './public/5a.jpg',
        title: 'Hats',
        rows: 2,
        cols: 1,
    },
    {
        img: './public/13.jpeg',
        title: 'Honey',
        rows: 1,
        cols: 1,
    },
    {
        img: './public/11.jpeg',
        title: 'Basketball',
        rows: 1,
        cols: 2,
    },
    {
        img: './public/9.jpeg',
        title: 'Basketball',
        rows: 1,
        cols: 2,
    },
    {
        img: './public/14.jpeg',
        title: 'Basketball',
        rows: 1,
        cols: 2,
    },
    {
        img: './public/5a.jpg',
        title: 'Fern',
        rows: 2,
        cols: 2,
    },
    {
        img: './public/6a.jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: './public/7a.jpg',
        title: 'Tomato basil',
        rows: 2,
        cols: 2,
    },
    {
        img: './public/8.jpeg',
        title: 'Sea star',
        rows: 2,
        cols: 2,
    },
    {
        img: './public/6a.jpg',
        title: 'Bike',
        rows: 2,
        cols: 2,
    },
    {
        img: './public/5.jpeg',
        title: 'Breakfast',
        rows: 1,
        cols: 2,
    },
    {
        img: './public/4.jpeg',
        title: 'Breakfast',
        rows: 1,
        cols: 2,
    }
]


function PastProjects() {
  return (
    <div>
      <h1>Past Projects</h1>
      <p>Our Portfolio of Success Dynamic Green Building Corp has a proven track record of delivering successful projects that prioritize sustainability without compromising quality or innovation. Some of our notable past projects include:

        The Greenfield Office Park – A revolutionary commercial space recognized for its energy efficiency and innovative use of recycled materials.
        Riverstone Residential Development – An eco-conscious housing project featuring solar energy, rainwater harvesting, and efficient insulation systems.
        Sunny Grove School Expansion – A school renovation project that minimized the carbon footprint through the use of sustainable building materials and technologies.
        These projects stand as a testament to our commitment to green building and sustainable development.</p>
        
      <ImageList 
      variant='quilted' 
      cols={4} 
      rowHeight={250}
      >
            {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>

    </div>
  )
}

export default PastProjects