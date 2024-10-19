import { Card, Image } from 'antd'

type ProductDetailsProps = {
    imageSrc: string
    title: string
    description: string
    tags?: string[]
    dealType: string
}

export default function ProductDetails({ imageSrc, title, description, tags = [], dealType }: ProductDetailsProps) {
    return (
        <Card className="product-card full-height">
            <div className="product-info">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={200}
                    height={200}
                    className="product-image"
                />
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                {tags && tags.length > 0 && (
                    <div className="product-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                )}
                <div className="lightning-deal">{dealType}</div>
            </div>
        </Card>
    )
}