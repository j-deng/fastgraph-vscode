interface DecoratorType {
  name: string;
  description?: string;
}

export const decorators: DecoratorType[] = [
  {
    name: "Resource",
    description: `\
*Resource*

Defines resource name

Example:

* @Resource User
`,
  },
  {
    name: "Chart",
    description: `\
*Chart*

Defines chart type and options, used by echarts render

Example:

* @Chart line, dimensions: \`[aField, bField]\`, options: \`{}\`
`,
  },
  {
    name: "Matrix",
    description: `\
*Matrix*

Flat list data to matrix, for table and echarts render

Example:

* @Matrix row: xField, col: yField, val: zField
`,
  },
  {
    name: "Permission",
    description: `\
*Permission*

Defines permissions, multi permissions split by \`|\`

Example:

* @Permission somePermission, delete: otherPermission
`,
  },
  {
    name: "Middleware",
    description: `\
*Middleware*

Defines middlewares, multi middlewares split by \`|\`

Example:

* @Middleware someMiddleware, create: validateMiddleware
`,
  },
  {
    name: "LoginRequired",
    description: `\
*LoginRequired*

Mark resource route as No auth required

Example:

* @LoginRequired true, read: false
`,
  },
  {
    name: "StaffRequired",
    description: `\
*StaffRequired*

Can access resource only if user.isStaff is true

Example:

* @StaffRequired true, read: false
`,
  },
  {
    name: "Field",
    description: `\
*Field*

Defines the field name

Example:

* @Field ID
  `,
  },
  {
    name: "Readonly",
    description: `\
*Readonly*

Defines the field as read-only

Example:

* @Readonly
  `,
  },
  {
    name: "Sortable",
    description: `\
*Sortable*

Defines the field is sortable

Example:

* @Sortable
  `,
  },
  {
    name: "Omit",
    description: `\
*Omit*

Remove field from resource or only specific route

Example:

* @Omit -- the field will be not exist from resource, useful for excluding one-to-many relation fields
* @Omit read: true -- the field will not be shown in list and detail
  `,
  },
  {
    name: "RefShowField",
    description: `\
*RefShowField*

Defines which field of the relationship object will be displayed in the frontend

Example:

* @RefShowField username
  `,
  },
  {
    name: "Type",
    description: `\
*Type*

Defines the type

Example:

* @Type Date
  `,
  },
  {
    name: "Form",
    description: `\
*Form*

Defines the frontend form component of that field

Example:

* @Form a-input-password
  `,
  },
  {
    name: "Present",
    description: `\
*Present*

Defines the frontend present component of that field

Example:

* @Present link
  `,
  },
  {
    name: "Filter",
    description: `\
*Filter*

Defines the field filter

Example:

* @Filter
* @Filter search: true
  `,
  },
  {
    name: "Validation",
    description: `\
*Validation*

Validation on string, number, date... - by using joi validator
@see the interface [JoiValidationKeywords](https://github.com/j-deng/fastgraph/blob/main/packages/fastgraph-node/src/decorators/field.ts)

Example:

* @Validation email: true
* @Validation min: 1, max: 20, alphanum: true`,
  },
  {
    name: "Column",
    description: `\
*Column*

Defines how the field column looks, width and ellipsis

Example:

* @Column width: 120, ellipsis: true
`,
  },
  {
    name: "Transform",
    description: `\
*Transform*

Transform the field by function-name before create and update resource

Example:

* @Transform hashPassword
`,
  },
];
