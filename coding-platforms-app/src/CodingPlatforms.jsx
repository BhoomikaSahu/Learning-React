import Data from './Data'
import Card from './Card'

const Coding = () => {
    return(
    Data.map(card => {
        return(
          <Card
            key = {card.id}
            img = {card.img}
            title = {card.title}
            link = {card.link}
          />
        )
    }))
}

export default Coding;